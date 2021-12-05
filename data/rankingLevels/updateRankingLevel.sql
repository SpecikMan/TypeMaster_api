UPDATE [dbo].[RankingLevel]
SET [createDate] = @createDate,
[fromRankPeriod] = @fromRankPeriod,
[toRankPeriod] = @toRankPeriod,
[levelContent1] = @levelContent1,
[levelContent2] = @levelContent2,
[levelContent3] = @levelContent3,
[time1] = @time1,
[time2] = @time2,
[time3] = @time3
WHERE [idRankingLevel]=@idRankingLevel
