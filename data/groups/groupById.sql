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
[Group].[totalScore]
from [dbo].[Group],[dbo].[Rank],[dbo].[RankingLevel],[dbo].[Account]
where [Group].[idRank] = [Rank].[idRank] and [Group].[idRankingLevel] = [RankingLevel].[idRankingLevel] and [Account].[idAccount] = [Group].[idAccount]
and [Group].idGroup = @idGroup