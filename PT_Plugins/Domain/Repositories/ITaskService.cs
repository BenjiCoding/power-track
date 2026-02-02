using Microsoft.Xrm.Sdk;

namespace PT_Plugins.Domain.Repositories
{
    public interface ITaskService
    {
        void CreateDefaultTasks(EntityReference parent, IOrganizationService service);
    }
}