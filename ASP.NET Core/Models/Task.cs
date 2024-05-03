namespace ASP.NET_Core.Models
{
    public class Task
    {
        public int ID { get; set; }
        public int AssigneeID { get; set; }
        public string TaskDescription { get; set; }
    }
}
