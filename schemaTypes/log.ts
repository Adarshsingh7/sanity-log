import {defineType} from 'sanity'

export default defineType({
  name: 'log',
  title: 'Log',
  type: 'document',
  fields: [
    {
      name: 'logMessage',
      title: 'Log Message',
      type: 'text',
    },
    {
      name: 'logLevel',
      title: 'Log Level',
      type: 'string',
      options: {
        list: [
          {title: 'Info', value: 'info'},
          {title: 'Warning', value: 'warning'},
          {title: 'Error', value: 'error'},
        ],
      },
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
})
