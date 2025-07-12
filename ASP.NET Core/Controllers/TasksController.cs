using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
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
            var updatedValues = JsonSerializer.Deserialize<Dictionary<string, object>>(values);

            foreach (var property in updatedValues)
            {
                var propInfo = employee.GetType().GetProperty(property.Key);
                if (propInfo != null && propInfo.CanWrite)
                {
                    propInfo.SetValue(employee, property.Value);
                }
            }

            return Ok();
        }
    }
}
