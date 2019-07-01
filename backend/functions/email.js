module.exports = (data_email) => {
    const { To, From, Subject, data_PDF, Html } = data_email
    const { Filename, Data, ContentId  }        = data_PDF
    const msg = {
        to: To,
        from: From,
        subject: Subject,
        attachments: [{
            filename: Filename, 
            content: Data,
            type: 'application/pdf',
            disposition: 'attachment',
            contentId: ContentId
        },],
        html: Html,
    };
    return msg; 
}
