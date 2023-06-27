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
* ### Database Updates
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
