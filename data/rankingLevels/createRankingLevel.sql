INSERT INTO [dbo].[RankingLevel]
    (
        [idRankingLevel],
        [createDate],
        [fromRankPeriod],
        [toRankPeriod],
        [levelContent1],
        [levelContent2]
    )
VALUES 
    (
        @idRankingLevel,
        @createDate,
        @fromRankPeriod,
        @toRankPeriod,
        @levelContent1,
        @levelContent2
    )