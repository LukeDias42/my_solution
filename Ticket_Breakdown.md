# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Update Agent table to accept CustomId

#### Description
Update the Agent table in the database to include a new field called CustomId. This field will allow Facilities to store and use their own custom ID for each of their agents.

#### Acceptance Criteria
- The Agent table must be modified to include the CustomId field.
- The CustomId field should accept alphanumeric values and a maximum length must be decided.
- The existing agents' data should be migrated to include their new CustomId.
- The CustomId field should be unique to ensure each agent has a distinct custom ID.
- The CustomId field should be indexed.

#### Implementation Details
1. Analyze the current Agent table schema and determine the appropriate data type and length for the CustomId field.
2. Update the database schema for the Agent table to include the CustomId field.
3. Create a migration script to add the CustomId column to the Agent table.
4. Implement the necessary database queries to support CRUD operations for the CustomId field.
5. Modify the code that interacts with the Agent table to include the CustomId field.
6. Write a data migration script to populate the CustomId field for existing agents, if the custom IDs are available.
7. Add a unique constraint and index to the CustomId field in the Agent table.

#### Time Estimate
4-6 hours.

### Ticket 2: Update generateReport to Show Custom ID

#### Description
Modify the generateReport function to display the custom ID of the Agent on the generated report instead of the internal database ID.

#### Acceptance Criteria
- The generateReport function must be updated to utilize the custom ID field for displaying the Agent's ID in the report.

#### Implementation Details
1. Review the existing implementation of the generateReport function to understand how the Agent's metadata is currently accessed.
2. If needed, update the getShiftsByFacility function to include the custom ID field in the returned metadata.
3. Modify the generateReport function to replace the usage of the internal database ID with the custom ID field when generating the report.
4. Ensure that the custom ID is correctly mapped and displayed in the appropriate section of the report.

#### Time Estimate
1-3 hours.

By updating the generateReport function, the generated report will display the custom ID of the Agent instead of the internal database ID.
This change will provide Facilities with the ability to view and utilize the custom IDs when generating the report.

