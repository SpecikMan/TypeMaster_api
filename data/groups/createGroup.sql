INSERT INTO [dbo].[Group]
    (
        [idGroup],
        [idRank],
        [idAccount],
        [idRankingLevel],
        [totalScore]
    )
VALUES 
    (
        @idGroup,
        @idRank,
        @idAccount,
        @idRankingLevel,
        @totalScore
    )