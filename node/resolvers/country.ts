import { ServiceContext } from '@vtex/api'

const getSettingsByCountry = (settings: Configuration[]) => {
  const settingsByCountry = settings.reduce<{
    [country: string]: CountryDataConfiguration
  }>((groupedConfigs, configuration) => {
    const { declarer } = configuration

    const [declarerAppName] = declarer.split('@')

    if (!configuration[declarerAppName]) {
      return groupedConfigs
    }

    const countryConfig = configuration[declarerAppName]

    groupedConfigs[countryConfig.countryISO] = countryConfig

    return groupedConfigs
  }, {})

  return settingsByCountry
}

export const queries = {
  countryData: (
    _: void,
    { country }: { country: string },
    ctx: ServiceContext
  ) => {
    return (
      getSettingsByCountry(ctx.vtex.settings.dependenciesSettings)[country] ??
      []
    )
  },
  allCountriesData: (_: void, __: void, ctx: ServiceContext) => {
    return Object.values(
      getSettingsByCountry(ctx.vtex.settings.dependenciesSettings)
    )
  },
}
