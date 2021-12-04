UPDATE [dbo].[RankingLevel]
SET [createDate] = @createDate,
[fromRankPeriod] = @fromRankPeriod,
[toRankPeriod] = @toRankPeriod,
[levelContent1] = @levelContent1,
[levelContent2] = @levelContent2
WHERE [idRankingLevel]=@idRankingLevel
