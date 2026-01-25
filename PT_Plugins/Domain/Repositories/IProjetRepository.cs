using System;
using PT_Plugins;

namespace PT_Plugins.Domain.Repositories
{
    public interface IProjetRepository
    {
        pt_Projet ProjectToCheck(Guid projectId);
    }
}
