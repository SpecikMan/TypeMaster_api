select 
[Group].[idGroup],
[Group].[idRank],[Rank].[rankName],[Rank].[reward],[Rank].[imagePath],[Rank].[promote],[Rank].[demote],
[Group].[idAccount],[Account].[username],
[Group].[idRankingLevel],
(SELECT FORMAT ([RankingLevel].[createDate], 'yyyy-MM-dd')) as [rankingCreateDate],
(SELECT FORMAT ([RankingLevel].[fromRankPeriod], 'yyyy-MM-dd')) as [fromRankPeriod],
(SELECT FORMAT ([RankingLevel].[toRankPeriod], 'yyyy-MM-dd')) as [toRankPeriod],
[RankingLevel].[levelContent1],
[RankingLevel].[levelContent2],
[Group].[score1],
[Group].[score2],
[Group].[score3],
(SELECT FORMAT ([Group].[datePlayed1], 'yyyy-MM-dd')) as [datePlayed1],
(SELECT FORMAT ([Group].[datePlayed2], 'yyyy-MM-dd')) as [datePlayed2],
(SELECT FORMAT ([Group].[datePlayed3], 'yyyy-MM-dd')) as [datePlayed3],
[Group].[totalScore]
from [dbo].[Group],[dbo].[Rank],[dbo].[RankingLevel],[dbo].[Account]
where [Group].[idRank] = [Rank].[idRank] and [Group].[idRankingLevel] = [RankingLevel].[idRankingLevel] and [Account].[idAccount] = [Group].[idAccount]
