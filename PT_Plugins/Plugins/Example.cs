using Microsoft.Xrm.Sdk;
using System;
using PT_Plugins;

namespace PT_Plugins.Plugins
{
    /// <summary>
    /// Plugin development guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    public class Example : PluginBase
    {
        public Example(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(Example))
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
            IOrganizationService service = localPluginContext.OrgSvcFactory.CreateOrganizationService(context.UserId);
            ITracingService tracingService = localPluginContext.TracingService;
        }
    }
}
