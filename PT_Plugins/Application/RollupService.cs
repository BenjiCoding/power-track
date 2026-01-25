using System;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using PT_Plugins.Domain.Repositories;

namespace PT_Plugins.Application
{
    public class RollupService : IRollupService
    {
        private readonly IOrganizationService _service;
        private readonly ITracingService _tracingService;
        public RollupService(IOrganizationService service, ITracingService tracingService)
        {
            _service = service;
            _tracingService = tracingService;
        }

        public void Recalculate(EntityReference target, string rollupLogicalName)
        {
            if (target == null || string.IsNullOrEmpty(rollupLogicalName))
            {
                throw new ArgumentException("Target and rollup logical name must be provided.");
            }
            _tracingService.Trace("Preparing to recalculate rollup field {0} for target {1}", rollupLogicalName, target.Id);
            var request = new CalculateRollupFieldRequest
            {
                Target = target,
                FieldName = rollupLogicalName
            };

            _service.Execute(request);
        }
    }
}
