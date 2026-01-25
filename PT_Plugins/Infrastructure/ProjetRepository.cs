using System;
using System.Linq;
using PT_Plugins;
using PT_Plugins.Domain.Repositories;

namespace PT_Plugins.Infrastructure
{
    public class ProjetRepository : IProjetRepository
    {
        private readonly OrgContext _context;

        public ProjetRepository(OrgContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public pt_Projet ProjectToCheck(Guid projectId)
        {
            return _context.pt_ProjetSet.FirstOrDefault(project => project.Id == projectId);
        }
    }
}
