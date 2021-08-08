module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nomor_antrian: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const EKI_ANTRIAN = mongoose.model("EKI_ANTRIAN", schema);
    return EKI_ANTRIAN;
};
