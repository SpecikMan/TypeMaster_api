select idFeedback,submitDetail,
(SELECT FORMAT ([submitDate], 'yyyy-MM-dd')) as [submitDate],
Account.idAccount,Account.username
 from Feedback,Account where Feedback.idAccount = Account.idAccount
