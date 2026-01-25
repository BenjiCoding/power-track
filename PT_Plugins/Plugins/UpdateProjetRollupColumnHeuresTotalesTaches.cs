using Microsoft.Xrm.Sdk;
using System;
using PT_Plugins;
using PT_Plugins.Domain.Repositories;
using PT_Plugins.Application;
using System.Diagnostics;

namespace PT_Plugins.Plugins
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    public class UpdateProjetRollupColumnHeuresTotalesTaches : PluginBase
    {
        public UpdateProjetRollupColumnHeuresTotalesTaches(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(UpdateProjetRollupColumnHeuresTotalesTaches))
        {
            // TODO: Implement your custom configuration handling
            // https://docs.microsoft.com/powerapps/developer/common-data-service/register-plug-in#set-configuration-data
        }

        // Entry point for custom business logic execution
        protected override void ExecuteDataversePlugin(ILocalPluginContext localPluginContext)
        {
            if (localPluginContext == null)
            {
                throw new ArgumentNullException(nameof(localPluginContext));
            }

            var context = localPluginContext.PluginExecutionContext;
            ITracingService tracingService = localPluginContext.TracingService;
            if (!string.Equals(context.MessageName, "Update", StringComparison.OrdinalIgnoreCase)
            && !string.Equals(context.MessageName, "Create", StringComparison.OrdinalIgnoreCase)) return;
            if (!string.Equals(context.PrimaryEntityName, "pt_tache", StringComparison.OrdinalIgnoreCase)) return;
            if (context.Stage != 40) return;

            IOrganizationService service = localPluginContext.OrgSvcFactory.CreateOrganizationService(context.UserId);

            Entity target = (Entity)context.InputParameters["Target"];
            Entity preImage = string.Equals(context.MessageName, "Create", StringComparison.OrdinalIgnoreCase)
                ? null
                : localPluginContext.GetPreImage("PreImage");
            Entity source = preImage ?? target;
            var projetRef = source.GetAttributeValue<EntityReference>("pt_projetid");
            string rollupLogicalName = "pt_rollupheurestotalesdetouteslestaches";

            IRollupService rollupService = new RollupService(service, tracingService);
            rollupService.Recalculate(projetRef, rollupLogicalName);

        }
    }
}
