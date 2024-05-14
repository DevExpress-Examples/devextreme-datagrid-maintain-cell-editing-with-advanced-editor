using ASP.NET_Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Task = ASP.NET_Core.Models.Task;

namespace ASP_NET_Core.Models {
    static class SampleData {
        public static List<State> States = new List<State>
        {
            new State { Name = "Alabama" },
            new State { Name = "Alaska" },
            new State { Name = "Arizona" },
            new State { Name = "Arkansas" },
            new State { Name = "California" }
        };


        public static List<Task> Tasks { get; } = new List<Task>
        {
            new Task { ID = 1, AssigneeID = 6, TaskDescription = "Refactor code to improve maintainability" },
            new Task { ID = 2, AssigneeID = 11, TaskDescription = "Update documentation for API endpoints" },
            new Task { ID = 3, AssigneeID = 3, TaskDescription = "Fix UI bugs reported by QA team" },
            new Task { ID = 4, AssigneeID = 8, TaskDescription = "Create automated deployment scripts" },
            new Task { ID = 5, AssigneeID = 14, TaskDescription = "Implement pagination for large datasets" },
            new Task { ID = 6, AssigneeID = 2, TaskDescription = "Integrate third-party API for payment processing" },
            new Task { ID = 7, AssigneeID = 5, TaskDescription = "Implement user authentication functionality" },
            new Task { ID = 8, AssigneeID = 9, TaskDescription = "Deploy application to staging environment" },
            new Task { ID = 9, AssigneeID = 10, TaskDescription = "Design and develop new feature based on requirements" },
            new Task { ID = 10, AssigneeID = 13, TaskDescription = "Write unit tests for new features" },
            new Task { ID = 11, AssigneeID = 4, TaskDescription = "Optimize database queries for better performance" },
            new Task { ID = 12, AssigneeID = 7, TaskDescription = "Conduct performance testing and analysis" },
            new Task { ID = 13, AssigneeID = 12, TaskDescription = "Conduct code review for pull request #123" },
            new Task { ID = 14, AssigneeID = 1, TaskDescription = "Perform security audit and implement fixes" },
            new Task { ID = 15, AssigneeID = 6, TaskDescription = "Create mockups for upcoming feature" },
            new Task { ID = 16, AssigneeID = 8, TaskDescription = "Optimize frontend assets for faster loading times" },
            new Task { ID = 17, AssigneeID = 3, TaskDescription = "Configure CI/CD pipeline for automated testing" },
            new Task { ID = 18, AssigneeID = 11, TaskDescription = "Investigate and resolve server downtime issue" },
            new Task { ID = 19, AssigneeID = 2, TaskDescription = "Provide technical support to end-users" },
            new Task { ID = 20, AssigneeID = 7, TaskDescription = "Implement error logging and monitoring" },
        };

            public static List<Employee> Employees { get; } = new List<Employee>
        {
            new Employee { ID = 1, FullName = "John Heart", Prefix = "Mr.", Position = "CTO", City = "Glendale", State = "California" },
            new Employee { ID = 2, FullName = "Olivia Peyton", Prefix = "Mrs.", Position = "HR Manager", City = "Glendale", State = "California" },
            new Employee { ID = 3, FullName = "Robert Reagan", Prefix = "Mr.", Position = "IT Manager", City = "Jacksonville", State = "Arkansas" },
            new Employee { ID = 4, FullName = "Greta Sims", Prefix = "Ms.", Position = "Shipping Manager", City = "Avondale", State = "Arizona" },
            new Employee { ID = 5, FullName = "Brett Wade", Prefix = "Mr.", Position = "Shipping Manager", City = "Buckeye", State = "Arizona" },
            new Employee { ID = 6, FullName = "Sandra Johnson", Prefix = "Mrs.", Position = "Network Admin", City = "Fairbanks", State = "Alaska" },
            new Employee { ID = 7, FullName = "Kevin Carter", Prefix = "Mr.", Position = "Network Admin", City = "Dothan", State = "Alabama" },
            new Employee { ID = 8, FullName = "Cynthia Stanwick", Prefix = "Ms.", Position = "Sales Assistant", City = "Dothan", State = "Alabama" },
            new Employee { ID = 9, FullName = "Kent Samuelson", Prefix = "Dr.", Position = "Sales Assistant", City = "Hoover", State = "Alabama" },
            new Employee { ID = 10, FullName = "Taylor Riley", Prefix = "Mr.", Position = "Support Assistant", City = "Glendale", State = "California" },
            new Employee { ID = 11, FullName = "Sam Hill", Prefix = "Mr.", Position = "Sales Assistant", City = "Anchorage", State = "Alaska" },
            new Employee { ID = 12, FullName = "Kelly Rodriguez", Prefix = "Ms.", Position = "Sales Assistant", City = "Glendale", State = "California" },
            new Employee { ID = 13, FullName = "Natalie Maguirre", Prefix = "Mrs.", Position = "Sales Assistant", City = "Jacksonville", State = "Arkansas" },
            new Employee { ID = 14, FullName = "Walter Hobbs", Prefix = "Mr.", Position = "Support Assistant", City = "Anchorage", State = "Alaska" },
        };
    }
}
