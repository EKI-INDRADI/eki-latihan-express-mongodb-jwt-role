module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nama_pasien: String,
            alamat: String,
            provinsi: String,
            kotakab: String,
            kecamatan: String,
            bpjs: Boolean,
            poli : String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const EKI_PASIEN = mongoose.model("EKI_PASIEN", schema);
    return EKI_PASIEN;
};
