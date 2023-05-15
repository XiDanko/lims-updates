# Release Notes

## v1.0.4 - 2023-05-11
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
