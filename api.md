#Resources
Represents the business unit that operates this service.
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| name | string | false | false | None |  |
| timezone | string | false | false | None |  |
| url | string | false | false | None |  |
Represents different time frames that have different schedules.
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| id | string | false | false | None | Text key uniquely identifying the time frame (SAt, SUN, WKDY, etc...). |
| start_date | date-time-iso8601 | false | false | None | When the calendar starts (inclusive). |
| end_date | date-time-iso8601 | false | false | None | When the calendar ends (exclusive). |
| monday | boolean | false | false | None |  |
| tuesday | boolean | false | false | None |  |
| wednesday | boolean | false | false | None |  |
| thursday | boolean | false | false | None |  |
| friday | boolean | false | false | None |  |
| saturday | boolean | false | false | None |  |
| sunday | boolean | false | false | None |  |

The path a service takes.
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| id | string | false | false | None |  |
| agency | agency | false | false | None |  |
| short_name | string | false | false | None |  |
| long_name | string | false | false | None |  |
| description | string | false | false | None |  |
| type | integer | false | false | None | 0 - tram/lightrail, 1 - subway, 2 - rail, 3 - bus, 4 - ferry, 5 - cable car, 6 - gondola, 7 - funicular |

Represnets a stop (you know, where you can like get of and like get on).
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| id | string | false | false | None |  |
| name | string | false | false | None |  |
| description | string | false | false | None |  |
| latitude | double | false | false | None |  |
| longitude | double | false | false | None |  |

Represents a stop on a particular trip.
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| trip | trip | false | false | None |  |
| arrival_time | date-time-iso8601 | false | false | None | The time that the vehicle arrives at the station. |
| departure_time | date-time-iso8601 | false | false | None | The time that the vehicle leaves the station.  Often the same as the arrival time indicating it's a quick stop. |
| stop | stop | false | false | None |  |
| sequence | integer | false | false | None | The order of the stop for this particular trip. |

The path the vehicle takes stopping for people along the way (unless it's full of course.  Then it might just keep going.  You never know.)
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| id | string | false | false | None |  |
| route | route | false | false | None |  |
| direction | integer | false | false | None | Sorta silly because it's make an assumption about where the 'center' is but: 1 - outbound, 2 - inbound |
| calendar | calendar | false | false | None |  |

A trip as planned for a particular user.  Effectiveliy, a set of steps to get from stop A to stop B.
##Fields
| Name | Type | Required? | Multi Valued? | Default | Description |
| steps | [planned_trip_step] | false | true | None |  |

