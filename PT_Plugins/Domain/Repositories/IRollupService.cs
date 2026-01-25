using Microsoft.Xrm.Sdk;

namespace PT_Plugins.Domain.Repositories
{
    public interface IRollupService
    {
        void Recalculate(EntityReference target, string rollupLogicalName);
    }
}
