export default function sitemap() {

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/#first_page`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/#skill`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/#projects`
        }
    ]
}