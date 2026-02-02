using Microsoft.Xrm.Sdk;
using System;
using PT_Plugins;
using PT_Plugins.Domain.Repositories;
using PT_Plugins.Startup;

namespace PT_Plugins.Plugins
{
    /// <summary>
    /// Plugin devel#opment guide: https://docs.microsoft.com/powerapps/developer/common-data-service/plug-ins
    /// Best practices and guidance: https://docs.microsoft.com/powerapps/developer/common-data-service/best-practices/business-logic/
    /// </summary>
    public class CreateDefaultTasks : PluginBase
    {
        private readonly IFactoryService _factoryService;
        
        public CreateDefaultTasks(string unsecureConfiguration, string secureConfiguration)
            : base(typeof(CreateDefaultTasks))
        {
            _factoryService = new ServiceFactory();
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
            if (!string.Equals(context.MessageName, "Create", StringComparison.OrdinalIgnoreCase))
            {
                return;
            }

            if (!context.InputParameters.Contains("Target") ||
                !(context.InputParameters["Target"] is Entity target))
            {
                return;
            }

            var parentRef = new EntityReference(target.LogicalName, target.Id);
            ITaskService taskService = _factoryService.CreateTaskService();
            taskService.CreateDefaultTasks(parentRef, service);
        }
    }
}
