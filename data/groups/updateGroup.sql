UPDATE [dbo].[Group]
SET 
[idRank] = @idRank,
[idAccount] = @idAccount,
[idRankingLevel] = @idRankingLevel,
[score1] = @score1,
[score2] = @score2,
[score3] = @score3,
[datePlayed1] = @datePlayed1,
[datePlayed2] = @datePlayed2,
[datePlayed3] = @datePlayed3,
[totalScore] = @totalScore
WHERE [idGroup]=@idGroup
