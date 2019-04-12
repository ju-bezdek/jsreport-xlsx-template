# jsreport-xlsx-template
 
**jspreport recipe using xlsx-template**

See documentation for [xlsx-template](https://github.com/optilude/xlsx-template)

**Configuration**

you must include template file into options:

Most simplistic use
```javascript
return jsreport.render({
                template:  {
                    recipe: "xlsx-template",
                    "xlsx-template":{templateFile:fs.readFile("yourTemplate.xlsx")}
                },
                data: {"some":"data"}
        }).then((output)=>{
            fs.writeFileSync("result.xlsx",output.content);
        });
```

TODO: Add support for jsreport-studio