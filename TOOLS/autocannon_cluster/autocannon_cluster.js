'use strict'

const http = require('http')
const autocannon = require('autocannon')

const server = http.createServer(handle)

server.listen(8081, startBench)

function handle(req, res) {
  res.end('hello world')
}


// http://localhost:8080/api/log-cluster/create
// http://localhost:8080/api/log/create
function startBench() {
  const url = 'http://localhost:' +  '8080'//server.address().port

  autocannon({
    url: url,
    connections: 1000,
    duration: 10,
    // headers: {
    //   // by default we add an auth token to all requests
    //   auth: 'A Pregenerated auth token'
    // },
    requests: [
      {
        method: 'POST', // this should be a post for logging in
        path: '/api/log-cluster/create',
        body: JSON.stringify({
            "data": [
                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object

                // ============================= object
                {
                    "PO": "test string",
                    "SO_list": [],
                    "DO_list": [],
                    "groups": [],
                    "deposit_allocated_amount": 0,
                    "SO": "SOD/GUDANG/001/2108/SUARDY0119",
                    "DO": "DOD/GUDANG/001/001/SUARDY0119",
                    "site": "EKITESTING",
                    "company_id": "EKITESTING",
                    "salesman_code": "SUARDY",
                    "customer": {
                        "customer_id": "CASH - BSA",
                        "name": "CASH",
                        "contact_no": "",
                        "email": "",
                        "address": "",
                        "region": "",
                        "city": "",
                        "province": "",
                        "postal_code": "",
                        "customer_salesman_code": "SUARDY"
                    },
                    "sub_total": 24,
                    "discount_amount": 0,
                    "grand_total": 24,
                    "down_payment_allocated_amount": 0,
                    "payment_paid_amount": 0,
                    "payment_change": -24,
                    "ppn_amount": 0,
                    "service_tax_amount": 0,
                    "term_of_payment": "NET0",
                    "term_of_payment_duration": 0,
                    "payment_method": "Cash",
                    "payment_account": {
                        "site": "TOKO",
                        "company_id": "NAGAKEMBAR",
                        "account_code": "100001",
                        "description": "PETTY CASH-TOKO",
                        "account_category": "ASSETS",
                        "account_subcategory": "CASH BANK"
                    },
                    "custom_detail": [],
                    "ar_paid_amount": 0,
                    "created_time": "2021-08-06T19:51:40.770+07:00",
                    "status": 1,
                    "print_counter": 0,
                    "cart": [
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "XL"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0019-XL-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0019-0049-XL-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-SWEATER HOODIE-0049-XL-M81",
                            "sku_count": 7,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T19:15:42.108+07:00",
                            "price": 1,
                            "total_price": 11,
                            "barcode": "PRODUK-PL0019-0049-XL-M81-2107-00007",
                            "qty": 11
                        },
                        {
                            "attribute_list": [
                                {
                                    "k": "warna",
                                    "v": "M81"
                                },
                                {
                                    "k": "size",
                                    "v": "M"
                                },
                                {
                                    "k": "category",
                                    "v": "PRODUK"
                                },
                                {
                                    "k": "sku_origin",
                                    "v": "PRODUK-PL0020-M-M81"
                                }
                            ],
                            "sku": "PRODUK-PL0020-0010-M-M81",
                            "site": "GUDANG",
                            "description": "PRODUK-JAKET RESLETING-0010-M-M81",
                            "sku_count": 5,
                            "uom": "Pcs",
                            "cost": 1000,
                            "inbound_time": "2021-07-22T17:20:10.405+07:00",
                            "price": 1,
                            "total_price": 13,
                            "barcode": "PRODUK-PL0020-0010-M-M81-2107-00005",
                            "qty": 13
                        }
                    ],
                    "requester": {
                        "username": "adminkosuardy",
                        "name": "Admin CV. MACAN KEMBAR",
                        "email": "",
                        "contact_no": ""
                    },
                    "payment_list": [
                        {
                            "account_code": "HUTANG",
                            "description": "HUTANG",
                            "amount": 24,
                            "payment_method": "HUTANG"
                        }
                    ],
                    "upcharge_amount": 0,
                    "credit_card_upcharge_amount": 0,
                    "delivery_fee": 0,
                    "materai": 0,
                    "transaction_time": "2021-08-06T19:51:30.792+07:00",
                    "extra_field_list": [],

                    "count": [
                        {
                            "k": "ar_count",
                            "v": 0
                        }
                    ],
                    "payment_date": "2021-08-06T19:51:40.770+07:00",
                    "INVOICE": "TEST/INV/GUDANG/SUARDY/2108/00014",
                    "open_api_id": null,
                    "document_id": null,
                    "cart_id": null,
                    "payment_type": null,
                    "return_amount": null,
                    "ar_number": null,
                    "invoice_type": 0,
                    "void_transaction_time": null
                },

                // ============================= /object


            ],
            "func_name": "autocannon",
            "note": "request",
            "new_dir": "autocannon_log/"
        }),
        onResponse: (status, body, context) => {
            if (status === 200) {
                context = JSON.parse(body)
            } // on error, you may abort the benchmark
        }
        // overwrite our default headers,
        // so we don't add an auth token
        // for this request
        // headers: {}
      }
    ]
  }, finishedBench)

  function finishedBench(err, res) {
    console.log('finished bench', err, res)
  }
}