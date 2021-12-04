UPDATE [dbo].[DetailLog]
SET 
    [idLevel] = @idLevel,
    [levelName] = @levelName,
    [idPublisher] = @idPublisher,
    [publisherName] = @publisherName,
    [idPlayer] = @idPlayer,
    [playerName] = @playerName,
    [score] = @score,
    [wpm] = @wpm,
    [wps] = @wps,
    [correct] = @correct,
    [wrong] = @wrong,
    [accuracy] = @accuracy,
    [timeLeft] = @timeLeft,
    [datePlayed] = @datePlayed,
    [chartData] = @chartData
WHERE [idLog]=@idLog
