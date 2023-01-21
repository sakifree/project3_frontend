# Find My License
An application to create, save, edit, update and/or delete licenses for an individual

### Technologies/Methods Used
- React
- CSS
- CRUD
- API
- Mongoose DB
- Schema
- Bootstrap
- Netlify



### Wireframes

Component Architecture

<img src="https://i.imgur.com/yzRJlEt.png">




### Routers

|Route | Element | Loader | Action | Summary |
|---------|-------------|----------|-----------|--------------|
| / | Index | indexLoader | | Display lists of licenses |
| /license/ :id | License | licenseLoader | | Display a selected license |
| /license/create/ :id | | | licenseCreateAction | creates a new license page to fill out |
| /license/update/:id | | | licenseUpdateAction | updates a pre-existing license with new/altered data |
| /license/delete/ :id | | | licenseDeleteAction | deletes a pre-existing license |
