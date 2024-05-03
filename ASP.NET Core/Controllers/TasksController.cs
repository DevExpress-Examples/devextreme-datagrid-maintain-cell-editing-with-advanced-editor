using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Linq;
using System.Xml.Linq;

namespace ASP.NET_Core.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(SampleData.Tasks, loadOptions);
        }

        [HttpPut]
        public IActionResult Put(int key, string values)
        {
            var employee = SampleData.Tasks.First(a => a.ID == key);
            JsonConvert.PopulateObject(values, employee);

            return Ok();
        }
    }
}
