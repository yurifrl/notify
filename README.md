# notify
Non obstructive notification engine

## Development
```
npm install
npm test
npm start
```


## Usage

```
Notify.send({
  header: 'Header Example',
  body: 'Body Example',
  kind: 'info',
})
```

## API

### Notify.send(props)
props details:

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>String</td>
      <td></td>
      <td>Header value</td>
    </tr>
    <tr>
      <td>body</td>
      <td>String</td>
      <td></td>
      <td>Body content</td>
    </tr>
    <tr>
      <td>kind</td>
      <td>String</td>
      <td>'info' - available: ['info', 'warning', 'error']</td>
      <td>Notification type, changes default class and duration time</td>
    </tr>
    <tr>
      <td>max</td>
      <td>String</td>
      <td>5</td>
      <td>Number of notification that can apear on screan</td>
    </tr>
  </tbody>
</table>
