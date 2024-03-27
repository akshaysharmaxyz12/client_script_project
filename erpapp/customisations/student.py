import frappe

@frappe.whitelist()
def export_customers_list():

    return frappe.db.sql(''' select cus.name,cus.customer_name,cus.customer_type,cus.territory,cus.customer_group,addr.address_line1,
                        addr.address_line2,addr.city,addr.pincode,addr.state,addr.country
                        from `tabCustomer` cus
                        left join `tabAddress` addr
                        on addr.name = cus.customer_primary_address
              ''',as_list=1)  