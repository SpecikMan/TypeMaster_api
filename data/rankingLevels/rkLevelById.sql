select idRankingLevel,
(SELECT FORMAT ([createDate], 'yyyy-MM-dd')) as [createDate],
(SELECT FORMAT ([fromRankPeriod], 'yyyy-MM-dd')) as [fromRankPeriod]
(SELECT FORMAT ([toRankPeriod], 'yyyy-MM-dd')) as [toRankPeriod],
levelContent1,levelContent2,levelContent3,time1,time2,time3
 from RankingLevel
 where idRankingLevel = @idRankingLevel