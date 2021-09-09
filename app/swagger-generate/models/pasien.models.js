
module.exports = {
    pasien: {
        type: 'object',
        properties: {
            nama_pasien: {
                type: 'string',
                description: "-",
                example: "pasien3"
            },
            usia: {
                type: "string",
                description: "-",
                example: "usia1"
            },
            alamat: {
                type: "string",
                description: "-",
                example: "alamat1"
            },
            provinsi: {
                type: "string",
                description: "-",
                example: "provinsi1"
            },
            kotakab: {
                type: "string",
                description: "-",
                example:"kotakab1"
            },
            kecamatan: {
                type: "string",
                description: "-",
                example: "kecamatan1"
            },
            bpjs: {
                type: "boolean",
                description: "-",
                example:  true
            },
            poli: {
                type: "string",
                description: "-",
                example: "gigi"
            }

        }
    }
}