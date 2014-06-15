#Resources
Represents the business unit that operates this service.
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | name | string |  | false |  |  | 
 | timezone | string |  | false |  |  | 
 | url | string |  | false |  |  | 
,#Resources
Represents different time frames that have different schedules.
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | id | string |  | false |  | Text key uniquely identifying the time frame (SAt, SUN, WKDY, etc...). | 
 | start_date | date-time-iso8601 |  | false |  | When the calendar starts (inclusive). | 
 | end_date | date-time-iso8601 |  | false |  | When the calendar ends (exclusive). | 
 | monday | boolean |  | false |  |  | 
 | tuesday | boolean |  | false |  |  | 
 | wednesday | boolean |  | false |  |  | 
 | thursday | boolean |  | false |  |  | 
 | friday | boolean |  | false |  |  | 
 | saturday | boolean |  | false |  |  | 
 | sunday | boolean |  | false |  |  | 
,#Resources
The path a service takes.
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | id | string |  | false |  |  | 
 | agency | agency |  | false |  |  | 
 | short_name | string |  | false |  |  | 
 | long_name | string |  | false |  |  | 
 | description | string |  | false |  |  | 
 | type | integer |  | false |  | 0 - tram/lightrail, 1 - subway, 2 - rail, 3 - bus, 4 - ferry, 5 - cable car, 6 - gondola, 7 - funicular | 
,#Resources
Represnets a stop (you know, where you can like get of and like get on).
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | id | string |  | false |  |  | 
 | name | string |  | false |  |  | 
 | description | string |  | false |  |  | 
 | latitude | double |  | false |  |  | 
 | longitude | double |  | false |  |  | 
,#Resources
Represents a stop on a particular trip.
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | trip | trip |  | false |  |  | 
 | arrival_time | date-time-iso8601 |  | false |  | The time that the vehicle arrives at the station. | 
 | departure_time | date-time-iso8601 |  | false |  | The time that the vehicle leaves the station.  Often the same as the arrival time indicating it's a quick stop. | 
 | stop | stop |  | false |  |  | 
 | sequence | integer |  | false |  | The order of the stop for this particular trip. | 
,#Resources
The path the vehicle takes stopping for people along the way (unless it's full of course.  Then it might just keep going.  You never know.)
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | id | string |  | false |  |  | 
 | route | route |  | false |  |  | 
 | direction | integer |  | false |  | Sorta silly because it's make an assumption about where the 'center' is but: 1 - outbound, 2 - inbound | 
 | calendar | calendar |  | false |  |  | 
,#Resources
A trip as planned for a particular user.  Effectiveliy, a set of steps to get from stop A to stop B.
##Fields
Name | Type | Required? | Multi Valued? | Default | Description
 | steps | [planned_trip_step] |  | true |  |  | 
