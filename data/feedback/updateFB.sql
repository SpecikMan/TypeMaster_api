UPDATE [dbo].[Feedback]
SET [submitDetail] = @submitDetail,
    [submitDate] = @submitDate,
    [idAccount] = @idAccount
WHERE [idFeedback]=@idFeedback
