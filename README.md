# notify
Non obstructive notification engine

## Instalation
npm install vue-notify --save

## Development
```
npm install
npm test
npm start
```


## Usage

```html
<template>
  <div id="app">
    <notify :notes="notes"></notify>
    <button class="btn" :action="createNotification">New Notification</button>
  </div>
</template>

<script>
import Notify from './components/Notify'
export default {
  name: 'app',
  components: {
    Notify
  },
  methods: {
    createNotification () {
      const data = {
        header: "Hello",
        body: "I'm a notification, and at this level i will be gonne pretty soon",
        duration: 90,
        level: "info"
      }
      this.notes.push(data)
    }
  }
}
</script>
```

## API

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
      <td>level</td>
      <td>String</td>
      <td>['info', 'warning', 'error']</td>
      <td>Notification type, changes default class and duration time</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Number</td>
      <td></td>
      <td>How long infos will be displayed</td>
    </tr>
  </tbody>
</table>
