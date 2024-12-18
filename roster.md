# Contents

- **Overview**: A summary of the KPIs and trends
- **Group Ranking**: A ranking view of Actual vs Benchmark and Actual vs Scheduled by site
- **Actual vs Benchmark**: Provides actual care hours worked per resident each day vs the benchmark ratio of hours per care type
- **Actual vs Scheduled**: Compare the hours worked vs the hours rostered and highlights variances
- **DayView**: Provides a visualisation of the hours worked vs rostered as well as unapproved and break in a time-series format as a diagnostic tool for sites
- **Paycode by Day**: Provides a breakdown of the hours by paycode

# Data Scope

- Hours worked data from Kronos and UKG Workforce Planner Pro (UKG)
- Check for info icon for the applicable roles for each visual
- Data from UKG is from 02/09/2024 for sites Bethesda, Cedar Manor, Foxbridge, Hugh Green, and Riverstone (pilot sites)
- For other sites, data from UKG is from 14/10/2024
- The historical Kronos data is loaded till the formentioned dates
- Care Home only, no Village and Support Office data, but includes SLA hours as care hours
- Occupancy reflects the number (and type) of residents from VCare for the given period
- Financial impact is based on the weighted average rate by staff type for the staff working
- All agency hours are NOT captured in the data

# Definition

- **Actual Hrs**: Actual worked hours recorded by Kronos and UKG
- **Scheduled Hrs**: Hours rostered. (Data from UKG is significantly different to Kronos, with a higher number of hours scheduled)
- **Worked hours**: Represent the hours physically present at the site and which contribute directly and indirectly to the care of the residents at the site. 
- **HrsType:**
  - **Not Worked**: Scheduled hours but not worked
  - **Scheduled-Delta**: Worked scheduled hours but not equal to rostered hours
  - **Scheduled-Equal**: Worked rostered hours with no variance
  - **Unapproved**: Hours captured by time and attendance but outside approved bounds and subject to review
  - **Unscheduled**: Hours worked but not scheduled

# Date Quality and Limitations

- Refreshed daily at 12:00 PM and 6:00 PM, for the previous day's data
- i.e: The data will be available T+1 since 12:00 PM
- Data within 48-96 hours of current date is subject to changes which result from Admin approvals/updates (the most recent 24 hours is generally understated)
- Data within 48-96 hours of current date is subject to changes which result from Admin approvals/updates (the most recent 24 hours is generally understated)
- Data is presented for validation in parallel to its use; the complexity and density of the data from Kronos means it needs to be reviewed in consultation with what you expect to see
- Support is available via your Finance Business Partner