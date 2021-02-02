export const ListItem = ({ site }) => {
    return (
      <>
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {site.siteName}
                        </div>
                        <div className="text-sm text-gray-500">
                        {site.siteCity}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{site.contactName}</div>
                <div className="text-sm text-gray-500">{site.sitePhone}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {site.locationCode}
            </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {site.sitePostalCode}
            </td>
        </tr>
      </>
    )
}