
var loadtest = require('loadtest');


function statusCallback(error, result, latency) {
    console.log('Current latency %j, result %j, error %j', latency, result, error);
    console.log('----');
    console.log('Request elapsed milliseconds: ', result.requestElapsed);
    console.log('Request index: ', result.requestIndex);
    console.log('Request loadtest() instance index: ', result.instanceIndex);
}

var data = {
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
    "func_name": "loadtest",
    "note": "request",
    "new_dir": "loadtest_log/",
    // "from" : "log-cluster"
}


const options = {
    url: 'http://localhost:8080',
    // concurrency: 5,
    method: 'POST',
    // body: "",
    requestsPerSecond: 4,
    maxSeconds: 5,
    statusCallback: statusCallback,
    requestGenerator: (params, options, client, callback) => {
        // const message = '{"data": {"array" : [ 1,2,3,4,5]}, "func_name": "test","note": "error","new_dir": "error_log/"}';

        let message = JSON.stringify(data)
        options.headers['Content-Length'] = message.length;
        options.headers['Content-Type'] = 'application/json';
        // options.body = '';
        options.path = '/api/log/create'
        const request = client(options, callback);
        request.write(message);
        return request;
    }
};

loadtest.loadTest(options, (error, results) => {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log(results);
    console.log('Tests run successfully');
});