using System.Collections.Generic;
using Microsoft.Xrm.Sdk;
using PT_Plugins.Domain.Repositories;

namespace PT_Plugins.Application
{
    public class TaskService : ITaskService
    {
        public void CreateDefaultTasks(EntityReference parent, IOrganizationService service)
        {
            var tasks = new List<pt_Tache>
            {
                new pt_Tache
                {
                    pt_Name = "Architecture",
                    pt_ProjetID = parent
                },
                new pt_Tache
                {
                    pt_Name = "Analyse",
                    pt_ProjetID = parent
                },
                new pt_Tache
                {
                    pt_Name = "Développement",
                    pt_ProjetID = parent
                }
            };
            foreach (var task in tasks)
            {
                service.Create(task);
            }
        }
    }
}