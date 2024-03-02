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
* print_templates: changes
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
* Fix copy branch data causing issues caused by duplicated created_at and updated_at values
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
* package_test: changes
  * id: new (uuid, primary)
* department_machine: changes
    * id: new (uuid, primary)
* user_can_view_departments: changes
    * id: new (uuid, primary)
* user_can_authorize_departments: changes
    * id: new (uuid, primary)
* followup_visit: changes
    * id: new (uuid, primary)
* branch_user: changes
    * id: new (uuid, primary)
* inventory_user: changes
    * id: new (uuid, primary)
* branch_product: changes
    * id: new (uuid, primary)
* visits: changes
  * spouse_visit_id: new (uuid, index)
  * branch_id, number: unique constrain
invoices: changes
  * branch_id, number: unique constrain
* packages: changes
  * is_premarital_screening_package: renamed to (is_premarital)
* parameters: changes
  * is_printable: new (boolean, default true)
* reference_ranges: changes
  * unit: nullable
* couples_personal_information: removed
* couples_medical_history: removed
* premarital_screening: removed
* premarital_visits: new
* premarital_consultations: new
* premarital_personal_information: new
* premarital_referrals: new
* attachments: new
* inventories: new
* products: new
* product_units: new
* inventory_user: new

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
    * his_patient_mrn: changed data type to (string)

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
  * his_visit_id: new (uuid, nullable, index)
* patients: changes
  * his_patient_id: new (uuid, nullable, index)
  * his_patient_mrn: new (unsigned integer, nullable, index)
* orders: changes
  * overdue_at: new (datetime, nullable)

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
* Results print with design \ without design toggle
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
* Ability to set instance_id and token directly in whatsapp settings
### Database Updates
* incomes: removed
* expenses: removed
* registers: changes
  * branch_id: removed
* costs: changes
  * expense_id: removed
* rates: changes
  * expense_id: removed
* transactions: changes
  * income_id: removed
  * item_id: changed (invoice_item_id)
  * register_id: changed (not null)
  * status: changed (string, field constrains removed)
  * type: changed (string, field constrains removed)
  * reference_register_id: new (uuid, nullable, index)
  * partner_id: new (uuid, nullable, index)
* ranges: changes
  * interpretation: changed (text)
* partners: changes
  * center_id: removed
  * has_register: new (bool) default (false)
  * user_id: new (uuid, index, nullable)
  * ratio: new (unsignedTinyInteger, nullable)
  * is_discount_included: new (boolean) default (false)
  * is_extra_charges_included: new (boolean) default (false)
* users: changes
  * has_partner: new (bool) default (false)
* rates: changes
  * ratio: new (unsignedTinyInteger, nullable)
  * total: new (unsignedInteger)
  * item_type: changed (nullable)
  * item_id: changed (nullable)

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
* reference_centers: removed
* reference_doctors: removed
* labs: removed
* partners: new
* item_shares: new
* visits: changes
  * reference_center_id: changed to "center_id"
  * reference_doctor_id: changed to "doctor_id"
* rates: changes
  * invoice_total: removed
  * beneficiary_ratio: removed
  * beneficiary_id: removed
  * beneficiary_type: removed
  * partner_id: new (uuid)
  * item_id: new (uuid)
  * item_type: new (string)
* price_list_items: changes
  * priceable_id: change to "item_id"
  * priceable_type: change to "item_type"

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
