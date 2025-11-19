# Last Updated: 18/11/2025

# Data Security and Variants

- **Roster - LT - ROM**: For LT/ROM, no data security is applied; users can see all data.
- **Roster - GM**: For GM (and later BC/Admin), data security is enabled. Users can see ALL aggregated data at the site/role level, but can ONLY see per-individual data (DayView and Paycode by Day) for their own site.

# Contents

- **Overview**: A summary of the KPIs and trends.
- **DayView**: Provides a visualisation of hours worked vs rostered, as well as unapproved hours and break time, in a time-series format for site diagnostics.
- **Paycode by Day**: Provides a breakdown of hours by paycode.
- **Role Mapping**: Provides a mapping of which roles are included or excluded from the dashboard. Note: The role in UKG can differ from the Chris21 role; the dashboard uses the Chris21 role where possible.
- **Daily Roster Tracker**: A shortcut to the daily email subscription view.

# Data Scope

- Hours worked data from Kronos and UKG Dimensions (Workforce Planner Pro).
- Care Homes only; excludes Village and Support Office data; includes SLA hours as care hours.
- Occupancy reflects the number (and type) of residents from VCare for the given period.
- Agency hours are included; use the Agency/Internal slicer to filter.

# Definition

- **Actual (Supply) Hrs**: Actual worked hours recorded in UKG.
- **Rostered Hrs**: Hours rostered (excluding unfilled open shifts).
- **Demand Hrs**: The hours required to care for our residents and run the site. This is calculated using the acuity mix and preset HPR.
- **HPR/HPRD**: The hours per resident per day for the given period.
- **Unapproved Hrs**: Early clock-in, late clock-out, and unrostered hours are initially treated as Unapproved in UKG. Once approved, they become Actual Hrs.

# Data Quality and Limitations

- Refreshed every 4 hours.
- Data from "yesterday" will NOT be included in the dashboard, as it is still finalising in UKG.
- The daily subscription sent each morning shows the data of "the day before yesterday" and is the latest date available in the main dashboard.
- Data within 24-96 hours of the current date is subject to change due to Admin approvals/updates.
- The email subscription is based on a static snapshot of data at the time of sending; subsequent updates will appear in the main dashboard but not in the email.
- Data is presented for validation in parallel with its use; given its complexity and density, please review it against expected outcomes.
- Support is available via Workforce Optimisation Manager `Silas.Harrison@bupa.co.nz`.
