UPDATE [dbo].[AccountLevelDetails]
SET 
    [idAccount] = @idAccount,
    [idLevel] = @idLevel,
    [score] = @score,
    [timeLeft] = @timeLeft,
    [datePlayed] = @datePlayed,
    [isLike] = @isLike,
    [wpm] = @wpm,
    [wps] = @wps,
    [correct] = @correct,
    [wrong] = @wrong,
    [accuracy] = @accuracy,
    [chartData] = @chartData
WHERE [idLevelDetails]=@idLevelDetails
