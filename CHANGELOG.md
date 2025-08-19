## v1.3.3 - 2025-08-19

### Fixes:

* New visit patient name field with
* System won't send whatsapp message to the default phone number
* Normalize phone numbers to adhere to E164 format
* Sample stock deduction
* Results monitor when patient has one order and the test is bypass
* Addon orders issues
* Transfer receipt issue when creating
* Purchase receipt cant add items in edit mode

### Features

* New parameter result type (Multiselect)
* Patient address as suggestion field
* Turnaround time in invoice orders

### Database Updates:

* packages: changes

  * turnaround\_time: new (string, nullable)

* services: changes

  * turnaround\_time: new (string, nullable)

## v1.3.2 - 2025-06-27

### Fixes:

* Results monitor sometimes not showing completed results
* Results monitor showing only the first branch of the signed in user
* Application expired issue

### Features:

* New Governorates and Districts management pages
* Governorate and District fields in premarital
* premarital address field is no longer required

### Database Updates:

* governorates: new
* districts: new
* premarital\_personal\_information: changes

  * governorate\_id: new (uuid, index, nullable)
  * district\_id: new (uuid, index, nullable)

## v1.3.1 - 2025-06-11

### Fixes:

* Too Many Attempts issue
* Cache issues

### Features:

* New tool: Execute SQL Statement

## v1.3.0 - 2025-06-06

### Fixes:

* Orders id was invalid in orders page
* Menses days save issue
* Permission to show/hide register transaction detailed summery

### Features:

* Show patient's age in orders page
* New tool: Refresh Application
* Prevent premarital visit update after consultation (except force update permission)

### Chores:

* Upgrade dependencies

## v1.2.2 - 2025-05-5

### Fixes:

* Premarital, Narcotics and His visits creation issue
* Premarital fix update issue
* Fullscreen and navigation arrows in rtl view
* Results with value of (0) saving issue
* Merge duplicate patients issue when user doesnt have all branches
* Purchase receipts total was calculated using the price instead of cost
* Inactive product units not showing issue
* Inability to create consumables for a test on different machines issue

### Features:

* When user doesn't have pay permission the invoice will always be open with no payment
* Permission to view or hide invoices summery
* User won't be able to add payment when creating invoice if user doesn't have payment permissions
* Ability to add doctor and center when creating visits from his
* New description field for tests
* Add total charges and paid amount to patients followup
* Cache all definitions for better performance

### Chores:

* Premarital show successful toast when canceling visit
* Premarital visits considered duplicates if registered within 3 months
* Unify dates format
* Orders, samples collection and samples accession pages auto refreshes only when today is selected
* Price Checker Page: center price
* Price Checker Page: show product image
* Pos page: add quantity to patch select modal
* Products: generic name is not required anymore
* POS: when product is selected and rescanned again i will increase quantity immediately
* Expense categories: add branch name and branch filter

### Database Updates:

* tests: changes

  * description: new (text, nullable)

## v1.2.1 - 2025-01-10

### Fixes:

* Insufficient quantity in stock issue

## v1.2.0 - 2025-01-09

### Fixes:

* Narcotics results page: printing/uploading results didn't update the status immediately
* Premarital print page: uploading/sending results didn't update the status immediately
* His was not ignoring partner id when not set
* Dashboard was not loading because of patients and visits statistics query issue
* Remember me check box in login page now actually works
* Suppliers branch filter
* Tests consumables filter
* Creating register transactions on any register by changing register id in my register page
* Regenerate Id tool, Merge Duplicate Patients tool, Clear Patient Data tool
* Activity log date filter makes double requests

### Features:

* New visit page: ability to search for orders in arabic characters
* Ability to define profit margin for products
* New product categories page and ability to add children categories to a root category
* Ability to add images for products and categories
* New cost field for stock and receipt items
* Fullscreen mode
* Ability to toggle navbar
* Prevent duplicate premarital visit based on national ids for husband and wife
* New Price Scanner page to scan products and get the price
* New POS page
* New Customers page
* New "Active" filter in all related pages
* New "Save" button in editor type parameter in results entry page
* Adding a note for orders in "new visitation" page will add the same note to the order in "orders" page
* New self results print page

### Chores:

* His visit creation api: patients contact methods is set to default contact method
* Premarital visits: patients contact methods is set to default contact method
* Narcotics visits: patients contact methods is set to default contact method
* Narcotics visits: add address field
* Invoice form: remove branch id from patients filter
* Invoice transactions: sort record by creating date from old to new
* Results monitor link added to front desk in navigation
* Reduce premarital camera image resolution to 320x240
* Adding current user id to all jasper printables
* round all prices in stock to closest 250
* round all costs to remove any decimal points
* Increase autorefresh duration from 15s to 30s
* Disable autorefresh when user is not on first page
* Greatly increase paginator performance when loading lots of pages

### Database Updates:

* product\_categories: new
* branch\_product\_category: new
* products: changes

  * product\_category\_id: new (uuid, nullable)
  * profit\_type: new (string)
  * profit\_amount: new (unsigned int)
  * image\_path: new (string, nullable)
  * generic\_name: new (string, nullable, index)

* stocks: changes

  * cost: new (unsigned int)
  * price: changed from float to int

* purchase\_receipt\_items: changes

  * cost: new (unsigned int)
  * price: changed from float to int

* narcotics\_visits: changes

  * address: new (string, nullable)

* invoice\_items: changes

  * stock\_id: new (uuid, nullable, index)
  * product\_unit\_id: new (uuid, nullable, index)

* patients: changes

  * is\_customer: new (boolean, false)

* invoices: changes

  * is\_pos: new (boolean, false)

## v1.1.6 - 2024-10-14

### Fixes:

* My register page permissions
* Premarital print page index permission
* Premarital visit save button keeps loading when editing then cancel the confirmation box
* Transactions page: category field always empty issue
* Packages page: updating a premarital package causes premarital toggle to switch off
* Printing premarital results from 'print page' also changes orders to 'released' in 'orders' page
* Premarital receipt date showing always as 12-10-2024 issue
* Copy parameter tool: fix some tests not showing in the list
* Copy parameter tool: fix error when replication is configured
* Copy reference ranges tool: fix some tests not showing in the list
* Copy reference ranges tool: fix error when replication is configured

### Features:

* Show duplication warning when creating new premarital visit with existing information
* Show duplication warning when printing premarital visit if another visit exists with same data
* Narcotics management

### Chores:

* Premarital visits page: enhance saving time
* Result template form: show content validation error
* Result template form: cloning a record now only copies name and content
* Remove branch restriction from patients
* Techport copy right mark in login and navbar

### Database Updates:

* visits: changes

  * number: change int to bigint

* invoices: changes

  * number: change int to bigint

* premarital\_visits: changes

  * number: change int to bigint
  * invoice\_number: change int to bigint

* purchase\_orders: changes

  * number: change int to bigint

* purchase\_receipts: changes

  * number: change int to bigint

* transfer\_requests: changes

  * number: change int to bigint

* transfer\_orders: changes

  * number: change int to bigint

* transfer\_receipts: changes

  * number: change int to bigint

* patients: changes

  * branch\_id: removed

* narcotics\_visits: new
* narcotics\_referrals: new

## v1.1.5 - 2024-08-16

### Fixes:

* Patient name is clipped in some cases in results monitor page
* Premarital results page break when adding new tests in premarital package (only for old patients)
* Stock transactions units
* Transfer receipts product unit always defers to base unit even if user change it
* Editing purchase receipt doesnt correct stock instead it adds another stock
* Users are able to return out stock by transfer receipt in stock transactions page

### Features:

* New Expiry Date filter in stock details page
* Alert quantities stock now marked yellow
* Zero quantities stock now marked red
* Expired quantities are marked red in stock details page
* Ability to add free quantities in purchase receipts
* Ability to add discount in purchase receipts
* Show total summery in (stock, stock details and purchase receipt) pages
* Purchase Receipts: new suppliers filter
* Creditor Page: new page listing creditors ledgers with multiple
* New Tool: copy test parameters
* New Tool: copy reference ranges
* New CRUD Page: expense categories

### Database Updates:

* purchase\_receipt\_items(changes)

  * free\_product\_unit\_id: new (uuid, nullable, index)
  * free\_quantity: new (uuid, nullable, index)

* stock(changes)

  * price: change datatype to float

* transactions(changes)

  * category: remove
  * expense\_category\_id: new (uuid, nullable, index)

* expense\_categories(new)

## v1.1.4 - 2024-07-16

### Fixes:

* Uploaded file gets removed after saving the results for a second time
* Patient contact method set to null after form reset when partner is selected

## v1.1.3 - 2024-07-05

### Fixes:

* Giving too many roles causes user roles design in navigation sidebar to overflow
* Printing too many files though HW bridge causing it to not work properly
* Invoice created by remote his doesn't respect his price (always using lis price)
* Selecting multiple records in (sample accession, sample collection and orders) pages doesnt work properly
* Transactions made by other branches don't show in register transactions page and don't get calculated in the transaction summery if the logged-in user isn't assigned to that branch as well
* Followup pagination showing duplicate data
* Followup is created for default numbers
* Patients created using patients management page causing phone number issues
* Many issues caused by local to international phone number conversion
* Registration number filter in results page
* Fix division by zero issue when total is zero and user has payment limit

### Features:

* Multi branch multi inventory management with multi units and stock batch support with request-order-receipt flow in mind
* New parameter result type (file) with ability to force specific file type (image or pdf)
* New name filter in roles page
* New category field for expense type transactions
* Worldwide phone number support
* Show four decimal points only in 0 value results
* Patient name filters now uses wildcard method for searching

### Chores:

* Manually adding .pdf to all downloadable prints and whatsapp files
* Adding date parameter for barcodes printing
* Adding validation for locale cookie value (en, ar)
* Patient default phone number is no longer required in general settings
* Limit patients names to the latest 5 names using same number in patients followup page
* His integration now creates open invoices with due balance (no payments)

### Database Updates:

* followups: changes

  * date: change type to datetime

* transactions: changes

  * category: new(string, nullable)

* results: changes

  * notes: change type to longtext

* suggestions: changes

  * content: change type to longtext

## v1.1.2 - 2024-03-11

### Fixes:

* Patients duplication issue
* Partner form 'ratio' label validation design issue
* Trim patients name from any excess spaces created by premarital visits

### Features:

* Ability to limit user minimum payments and maximum discount per invoice
* New "Merge Duplicate Patients" tool

### Chores:

* Reset roadrunner "workers\_number"

### Database Updates:

* users: (changes)

  * minimum\_payment: new(tinyint, unsigned, nullable)
  * maximum\_discount: new(tinyint, unsigned, nullable)

## v1.1.1 - 2024-03-01

### Fixes:

* Reference doctor not showing in result entry page
* All printables goes to barcode printer when direct printing
* Print template form doesnt load selected branch tests for results type
* Print template type filter doesnt show all values

### Features:

* Ability to select or create new printer for any print template (used for direct print only)

### Chores:

* When premarital consultation is created orders are immediately accepted
* Much cleaner print api
* Limit roadrunner workers to 2 instances
* Prevent printing samples barcodes when patient has no orders
* Show "Invalid barcode" error when scanning invalid barcode in "results entry" page

### Database Updates:

* print\_templates: changes

  * printer: new (string)

## v1.1.0 - 2024-02-28

* Fix "jasperserver" and "his integration" settings not showing when giving "show" permissions
* Fix lab name always showing as "local" in results entry page
* Fix minor design issues
* Fix "whatsapp settings" requires "token" and "instance id" event when disabled
* Fix Invoice creation details not showing in activity log
* Fix Roles and permissions caching problem in case of multiple branches
* Fix server error when saving price list item with no price
* Fix print images fails saving on multiple create
* Fix print images not clearing departments after changing branch
* Fix report undefined causing report loading error
* Fix item not showing when editing price list item
* Fix item not showing when editing quick add item
* Fix followup date filter
* Fix orders page window scroll issue caused by filters wrap
* Fix user signature server error
* Fix date filter in samples collection and samples accession
* Fix buttons design in samples collection and samples accession
* Fix fetching previous results causing 2100 sql parameter issue
* Fix duplicate reg number when created by a partner
* Fix regenerate id causing not authorized issue
* Fix copy branch data causing issues caused by duplicated created\_at and updated\_at values
* Fix some design problems
* Fix camera modal causing view live video play on iphone issue
* Fix camera modal auto inverts horizontally when on user mod
* Fix no query result for invoice item when creating premarital visits with user having more than one branch
* Fix some filters design
* Fix permission sync command
* Remove special permissions
* Extra validation for reference range between operator now doesnt allow spaces
* Changed "user form" layout
* Print buttons now has their own loading states in (visits) page (can do multiple prints at once)
* Ability to download any prinable as pdf by holding shift key and click
* Ability to force print dialog by holding ctrl and click
* Editing a visit won't print anything
* Integration log now opens all data tags on a single click
* New "Check All" and "Clear" buttons for permission selection
* New forms design
* Change filter design
* Greatly improve mobile experience
* Update manager now shows changelog when application is up-to-date
* Jasper reports now support http and https according to client protocol
* Integrate online activation
* Reference range unit is not required anymore
* Whatsapp messages now uses queues
* New "IsPrintable" for parameters
* Ability to add placeholders for (editor, text and multiline) results type
* No need to manually refresh after editing or adding new branch
* Ability to sort orders in desc or asc and save current selection to local storage
* Changed results orders status filter behaviour
* User cant update or cancel-receive transfer-in or transfer-out transactions
* Rejected samples will be shown at results monitor until recollected
* Formula type parameter results will show up to 4 decimal places if there is
* Live phone number validation for patients, visits and premarital forms
* Change international phone number format to local format

### Database Updates

* package\_test: changes

  * id: new (uuid, primary)

* department\_machine: changes

  * id: new (uuid, primary)

* user\_can\_view\_departments: changes

  * id: new (uuid, primary)

* user\_can\_authorize\_departments: changes

  * id: new (uuid, primary)

* followup\_visit: changes

  * id: new (uuid, primary)

* branch\_user: changes

  * id: new (uuid, primary)

* inventory\_user: changes

  * id: new (uuid, primary)

* branch\_product: changes

  * id: new (uuid, primary)

* visits: changes

  * spouse\_visit\_id: new (uuid, index)
  * branch\_id, number: unique constrain
    invoices: changes
  * branch\_id, number: unique constrain

* packages: changes

  * is\_premarital\_screening\_package: renamed to (is\_premarital)

* parameters: changes

  * is\_printable: new (boolean, default true)

* reference\_ranges: changes

  * unit: nullable

* couples\_personal\_information: removed
* couples\_medical\_history: removed
* premarital\_screening: removed
* premarital\_visits: new
* premarital\_consultations: new
* premarital\_personal\_information: new
* premarital\_referrals: new
* attachments: new
* inventories: new
* products: new
* product\_units: new
* inventory\_user: new

## v1.0.8 - 2023-09-06

* Fix his integration (mainly for sClinic)
* Fix saving new visit will reset contact method to 'none' ignoring branch default settings
* Ability to print barcodes and accept orders from his
* Ability to order (tests, packages, services) from his
* When lab is selected in new visits page the patient number will change to the selected lab number
* While creating new visits patient phone number won't reset after saving if visit has lab

## v1.0.7 - 2023-08-12

* Fix results received from machines having duplicate mapcode results in duplicate entries for same parameter
* Fix patient name sometimes not showing in followup page
* Fix barcode auto scanner doesnt allow (-) character
* Fix validation not cleared after inserting valid value while having other validation errors
* Ability to add reference ranges without any range to get unit info in the result entry page
* New "His Integration Settings" page
* Ability to send patient results to his endpoint using "His Integration Settings"
* Integration Log now logs all incoming requests
* Integration Log in case of undefined mapcodes will log only one message per request containing only undefined mapcodes in the data tree
* Integration Log new filters (sample barcode and level), new messages options in message filter
* New "Clone" action in roles and result templates
* Force mobile viewport to initial width of 1920px

### Database Updates

* patients: changes

  * his\_patient\_mrn: changed data type to (string)

## v1.0.6 - 2023-07-29

* Fix disable machine showing in results entry
* Fix editor issues when printing and when copying from ms word
* Fix permission cache when copying branch data
* Fix quick add showing disabled tests
* Fix package includes disabled tests
* Fix invoice issue when changing item price
* Fix saving results with two editor parameters same image issue
* Display error when selecting empty package
* Ability to search by patient his id, mrn
* Changes in the his api (partners, price management, mrn and patient id, health information)
* New patient contact method setting in general settings
* Formula based result will evaluate to integers if no decimal point exits
* New parameter result type (multiline)
* New parameter filter (result type)
* Overdue time management in results page
* Remove (received, tested, authorized, released) statuses from "Order change status modal"
* Inprintable tests now releases at authorization step directly

### Database Updates

* visits: changes

  * his\_visit\_id: new (uuid, nullable, index)

* patients: changes

  * his\_patient\_id: new (uuid, nullable, index)
  * his\_patient\_mrn: new (unsigned integer, nullable, index)

* orders: changes

  * overdue\_at: new (datetime, nullable)

## v1.0.5 - 2023-06-27

* Fix settings:sync command
* Fix default field unexpected behavior when editing print templates, print images, price lists
* Fix quick add item order generation on create
* Fix formula generator getting all parameters ignoring the selected branch
* Fix quick add item activation toggle
* Fix rate generation
* Fix quick add items not working when selecting a package
* Fix rates not recalculated when updating invoice
* Fix expenses statistics in dashboard now showing only received expenses
* Fix pagination on price list item
* Update manager automatically checks for updates
* Update manager displays new version or changelog release notes as markdown
* Catch any 401 (unauthenticated) error and redirect user to login page automatically
* Separate transactions into Invoice transactions and register transactions
* New transaction types (transfer-in, transfer-out, top-up and expense)
* Ability to transfer cash from one register to another
* Ability to add expenses on specific register
* Ability to top up registers
* Transactions summery header stays consistent when changing type and status
* Each user will have only single register even with multiple branches
* Costs page now doesn't generate any expense or transactions (view only for reports and analysis)
* Results print with design \\ without design toggle
* Cache any 419 (csrf token mismatch) and reload page
* Apply permissions on clickable links in (transactions, costs, rates details)
* Remove "type" selection from "quick add items" and "price list items" forms
* Ability to assign multiple items for multiple partners in "items share" form
* Ability to assign user and register to a partner
* Any Invoices assigned to partner with register will have all transactions on the partner user register
* Ability to strict partner user to only show his related records
* Quick add items modal now showing only departments containing tests
* Remove default gender value from visit and patient forms
* Rate by partner ratio and item shares
* Ability to set instance\_id and token directly in whatsapp settings

### Database Updates

* incomes: removed
* expenses: removed
* registers: changes

  * branch\_id: removed

* costs: changes

  * expense\_id: removed

* rates: changes

  * expense\_id: removed

* transactions: changes

  * income\_id: removed
  * item\_id: changed (invoice\_item\_id)
  * register\_id: changed (not null)
  * status: changed (string, field constrains removed)
  * type: changed (string, field constrains removed)
  * reference\_register\_id: new (uuid, nullable, index)
  * partner\_id: new (uuid, nullable, index)

* ranges: changes

  * interpretation: changed (text)

* partners: changes

  * center\_id: removed
  * has\_register: new (bool) default (false)
  * user\_id: new (uuid, index, nullable)
  * ratio: new (unsignedTinyInteger, nullable)
  * is\_discount\_included: new (boolean) default (false)
  * is\_extra\_charges\_included: new (boolean) default (false)

* users: changes

  * has\_partner: new (bool) default (false)

* rates: changes

  * ratio: new (unsignedTinyInteger, nullable)
  * total: new (unsignedInteger)
  * item\_type: changed (nullable)
  * item\_id: changed (nullable)

## v1.0.4 - 2023-05-15

* New permissions that allows users to create labs, reference centers and reference doctors via multiselect options
* Authorized editor results shows in editor modal with disabled attributes
* Fix previous entries for editor type parameter
* New Partner definition in replacement for (reference center, lab and doctor)
* Validation for duplicate partner name
* Change uuid version to ordered uuids
* Center, Lab and doctor filters are replaced with single Partner filter in (results, follow up, orders, invoice)
* Fix price list item form when editing item and changing only item type now resets item selection
* Add partner filter in visits
* New Item Shares management in pricing strategy
* New way generating rates

### Database Updates

* reference\_centers: removed
* reference\_doctors: removed
* labs: removed
* partners: new
* item\_shares: new
* visits: changes

  * reference\_center\_id: changed to "center\_id"
  * reference\_doctor\_id: changed to "doctor\_id"

* rates: changes

  * invoice\_total: removed
  * beneficiary\_ratio: removed
  * beneficiary\_id: removed
  * beneficiary\_type: removed
  * partner\_id: new (uuid)
  * item\_id: new (uuid)
  * item\_type: new (string)

* price\_list\_items: changes

  * priceable\_id: change to "item\_id"
  * priceable\_type: change to "item\_type"

## v1.0.3 - 2023-05-04

* Fix empty label in price list items
* Separate country code from national form for patient phone number in new visit form
* Fix parameter editor image styling
* Fix invoice summery
* Fix print bridge in orders results
* Fix price list in invoice form
* New dashboard page
* New reference doctor and lab filters in invoices page

## v1.0.2 - 2023-04-11

* Add default test price for his test list api
* All branches, departments, machines, tests and parameters now searchable by name, code and shortform
* All tests and parameters display shortform as their label
* His integration will take first active branch of authenticated user
* Machine requesting orders having same mapcode will return only unique mapcodes
* Add accept button in samples collection page
* Add auto refresh in results page
