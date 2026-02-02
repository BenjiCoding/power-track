using PT_Plugins.Application;
using PT_Plugins.Domain.Repositories;

namespace PT_Plugins.Startup
{
    public class ServiceFactory : IFactoryService
    {
        public ITaskService CreateTaskService()
        {
            return new TaskService();
        }
    }
}
