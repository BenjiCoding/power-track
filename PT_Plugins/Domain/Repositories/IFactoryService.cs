namespace PT_Plugins.Domain.Repositories
{
    public interface IFactoryService
    {
        ITaskService CreateTaskService();
    }
}
