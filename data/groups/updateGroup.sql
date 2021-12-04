UPDATE [dbo].[Group]
SET 
[idRank] = @idRank,
[idAccount] = @idAccount,
[idRankingLevel] = @idRankingLevel,
[totalScore] = @totalScore
WHERE [idGroup]=@idGroup
