﻿using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NET_Core.Controllers
{
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(SampleData.Employees, loadOptions);
        }
    }
}
