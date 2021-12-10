INSERT INTO [dbo].[Feedback]
    (
        [idFeedback],
        [submitDetail],
        [submitDate],
        [idAccount]
    )
VALUES 
    (
        @idFeedback,
        @submitDetail,
        @submitDate,
        @idAccount
    )